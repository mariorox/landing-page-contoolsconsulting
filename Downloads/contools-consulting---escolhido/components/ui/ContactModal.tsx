import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const stylingAttempts = useRef(0);

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;

      script.onload = () => {
        console.log('[Contools] LeadConnector script loaded');
        // Múltiplas tentativas de injetar CSS
        attemptStyleInjection();
      };

      document.body.appendChild(script);
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  const attemptStyleInjection = () => {
    const maxAttempts = 10;
    let attempts = 0;

    const tryInject = () => {
      attempts++;
      console.log(`[Contools] Tentativa ${attempts} de injetar CSS...`);

      try {
        const iframe = document.getElementById('inline-qFD2JC8L5TnulfdZMAoY') as HTMLIFrameElement;

        if (!iframe) {
          console.log('[Contools] iframe não encontrado ainda');
          if (attempts < maxAttempts) {
            setTimeout(tryInject, 300);
          }
          return;
        }

        // Tentar acessar contentDocument
        let doc = iframe.contentDocument;
        if (!doc) {
          console.log('[Contools] contentDocument não acessível, tentando contentWindow');
          try {
            doc = iframe.contentWindow?.document;
          } catch (e) {
            console.log('[Contools] Não conseguiu acessar contentWindow:', e);
          }
        }

        if (!doc) {
          console.log('[Contools] Não foi possível acessar o document do iframe');
          if (attempts < maxAttempts) {
            setTimeout(tryInject, 500);
          }
          return;
        }

        // Procurar por formulário dentro do iframe
        const formElements = doc.querySelectorAll('form, input, button, [class*="form"]');
        console.log(`[Contools] Encontrou ${formElements.length} elementos de formulário`);

        if (formElements.length === 0 && attempts < maxAttempts) {
          console.log('[Contools] Formulário ainda não renderizado, tentando novamente...');
          setTimeout(tryInject, 500);
          return;
        }

        // Injetar CSS global no iframe
        injectGlobalStyles(doc);

        // Injetar estilos inline em elementos específicos
        injectInlineStyles(doc);

        // Usar MutationObserver para observar mudanças futuras
        setupMutationObserver(doc);

        console.log('[Contools] CSS injetado com sucesso!');
      } catch (error) {
        console.error('[Contools] Erro ao injetar CSS:', error);
        if (attempts < maxAttempts) {
          setTimeout(tryInject, 500);
        }
      }
    };

    tryInject();
  };

  const injectGlobalStyles = (doc: Document) => {
    // Remover estilo antigo se existir
    const oldStyle = doc.getElementById('contools-global-styles');
    if (oldStyle) oldStyle.remove();

    // Criar novo elemento style
    const styleEl = doc.createElement('style');
    styleEl.id = 'contools-global-styles';
    styleEl.setAttribute('data-injected', 'true');

    styleEl.textContent = `
      * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }
      body, html { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }

      label, .label { color: #1D355D !important; font-weight: 600 !important; font-size: 14px !important; }

      input, textarea, select {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
        font-size: 14px !important;
        color: #1D355D !important;
        background-color: #ffffff !important;
        border: 1px solid #E5E7EB !important;
        border-radius: 8px !important;
        padding: 12px 16px !important;
      }

      input:focus, textarea:focus, select:focus {
        border-color: #8EBF36 !important;
        box-shadow: 0 0 0 3px rgba(142, 191, 54, 0.2) !important;
        outline: none !important;
      }

      button, input[type="submit"], input[type="button"] {
        background-color: #8EBF36 !important;
        color: #1D355D !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        text-transform: uppercase !important;
        padding: 12px 32px !important;
        border: none !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
      }

      button:hover, input[type="submit"]:hover, input[type="button"]:hover {
        background-color: #7aa82e !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(142, 191, 54, 0.3) !important;
      }
    `;

    doc.head.appendChild(styleEl);
  };

  const injectInlineStyles = (doc: Document) => {
    // Aplicar estilos diretos em buttons
    const buttons = doc.querySelectorAll('button, input[type="submit"], input[type="button"]');
    buttons.forEach((btn) => {
      const element = btn as HTMLElement;
      element.style.backgroundColor = '#8EBF36';
      element.style.color = '#1D355D';
      element.style.fontWeight = '700';
      element.style.fontSize = '14px';
      element.style.textTransform = 'uppercase';
      element.style.padding = '12px 32px';
      element.style.border = 'none';
      element.style.borderRadius = '8px';
      element.style.cursor = 'pointer';
      element.style.fontFamily = 'Inter, system-ui, sans-serif';
      element.style.transition = 'all 0.3s ease';

      element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = '#7aa82e';
        element.style.transform = 'translateY(-2px)';
        element.style.boxShadow = '0 6px 20px rgba(142, 191, 54, 0.3)';
      });

      element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = '#8EBF36';
        element.style.transform = 'translateY(0)';
        element.style.boxShadow = 'none';
      });
    });

    // Aplicar estilos em inputs
    const inputs = doc.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      element.style.fontFamily = 'Inter, system-ui, sans-serif';
      element.style.fontSize = '14px';
      element.style.color = '#1D355D';
      element.style.borderColor = '#E5E7EB';
      element.style.borderRadius = '8px';
      element.style.padding = '12px 16px';

      element.addEventListener('focus', () => {
        element.style.borderColor = '#8EBF36';
        element.style.boxShadow = '0 0 0 3px rgba(142, 191, 54, 0.2)';
        element.style.outline = 'none';
      });

      element.addEventListener('blur', () => {
        element.style.borderColor = '#E5E7EB';
        element.style.boxShadow = 'none';
      });
    });

    // Aplicar estilos em labels
    const labels = doc.querySelectorAll('label');
    labels.forEach((label) => {
      label.style.color = '#1D355D';
      label.style.fontWeight = '600';
      label.style.fontSize = '14px';
      label.style.fontFamily = 'Inter, system-ui, sans-serif';
    });
  };

  const setupMutationObserver = (doc: Document) => {
    // Observar mudanças no formulário e aplicar estilos novamente
    const observer = new MutationObserver(() => {
      console.log('[Contools] Mudanças detectadas no formulário, reaplicando estilos...');
      injectInlineStyles(doc);
    });

    observer.observe(doc.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  };

  if (!isOpen) return null;

  // Debug: Check if browser console shows injection logs

  return (
    <>
      {/* Backdrop com gradiente de entrada */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative flex flex-col animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header com tema da marca */}
          <div className="bg-gradient-to-r from-dark to-acid p-6 sm:p-8 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-acid flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Schedule Your Consultation
                  </h2>
                </div>
                <p className="text-acid/80 text-sm sm:text-base">
                  Let's discuss how we can help your business expand to Brazil
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 text-white"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-hidden p-6 sm:p-8 bg-white">
            {/* LeadConnector iframe */}
            <iframe
              ref={iframeRef}
              src="https://api.leadconnectorhq.com/widget/form/qFD2JC8L5TnulfdZMAoY"
              style={{
                width: '100%',
                height: '509px',
                border: 'none',
                borderRadius: '0px',
              }}
              id="inline-qFD2JC8L5TnulfdZMAoY"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contools Website Form"
              data-height="509"
              data-layout-iframe-id="inline-qFD2JC8L5TnulfdZMAoY"
              data-form-id="qFD2JC8L5TnulfdZMAoY"
              title="Contools Website Form"
            />
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
