/**
 * SSA-BR Login Template - JavaScript Interactivity
 * ================================================
 * Código vanilla JavaScript para o template de login moderno
 * 
 * @author JS-Engineer
 * @version 1.0.0
 */

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeLoginForm();
    initializePasswordToggle();
    initializeRememberMe();
    initializeInputAnimations();
});

// ============================================
// MÓDULO: VALIDAÇÃO DE FORMULÁRIO
// ============================================

/**
 * Inicializa o formulário de login com validação e submit
 */
function initializeLoginForm() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('senha');

    if (!form || !emailInput || !passwordInput) {
        console.error('Elementos do formulário não encontrados');
        return;
    }

    // Validação em tempo real
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    passwordInput.addEventListener('blur', () => validatePassword(passwordInput));

    // Submit do formulário
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Limpar erros anteriores
        clearAllErrors();

        // Validar campos
        const isEmailValid = validateEmail(emailInput);
        const isPasswordValid = validatePassword(passwordInput);

        if (!isEmailValid || !isPasswordValid) {
            showNotification('Por favor, corrija os erros no formulário', 'error');
            return;
        }

        // Iniciar processo de login
        await handleLogin(emailInput.value, passwordInput.value);
    });
}

/**
 * Valida o campo de email
 * @param {HTMLInputElement} input - Elemento input de email
 * @returns {boolean} - True se válido, false se inválido
 */
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input.value.trim());

    if (!isValid) {
        showFieldError(input, 'Por favor, insira um email válido');
        input.parentElement?.classList.add('error');
    } else {
        clearFieldError(input);
        input.parentElement?.classList.remove('error');
    }

    return isValid;
}

/**
 * Valida o campo de senha
 * @param {HTMLInputElement} input - Elemento input de senha
 * @returns {boolean} - True se válido, false se inválido
 */
function validatePassword(input) {
    const isValid = input.value.trim().length > 0;

    if (!isValid) {
        showFieldError(input, 'A senha é obrigatória');
        input.parentElement?.classList.add('error');
    } else {
        clearFieldError(input);
        input.parentElement?.classList.remove('error');
    }

    return isValid;
}

/**
 * Mostra mensagem de erro em um campo específico
 * @param {HTMLInputElement} input - Elemento input
 * @param {string} message - Mensagem de erro
 */
function showFieldError(input, message) {
    clearFieldError(input);
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ef4444;
        font-size: 0.75rem;
        margin-top: 0.25rem;
        display: block;
        animation: fadeIn 0.3s ease;
    `;
    
    input.parentElement?.appendChild(errorElement);
    input.setAttribute('aria-invalid', 'true');
}

/**
 * Remove mensagem de erro de um campo
 * @param {HTMLInputElement} input - Elemento input
 */
function clearFieldError(input) {
    const parent = input.parentElement;
    if (parent) {
        const existingError = parent.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    input.removeAttribute('aria-invalid');
}

/**
 * Limpa todas as mensagens de erro do formulário
 */
function clearAllErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.remove());
    document.querySelectorAll('[aria-invalid="true"]').forEach(el => {
        el.removeAttribute('aria-invalid');
    });
}

// ============================================
// MÓDULO: TOGGLE DE VISIBILIDADE DE SENHA
// ============================================

/**
 * Inicializa o botão de toggle de visibilidade da senha
 */
function initializePasswordToggle() {
    const passwordInput = document.getElementById('senha');
    if (!passwordInput) return;

    // Criar botão de toggle
    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'password-toggle';
    toggleButton.setAttribute('aria-label', 'Mostrar senha');
    toggleButton.innerHTML = getEyeIcon('closed');
    
    // Estilos do botão
    toggleButton.style.cssText = `
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        color: #6b7280;
        transition: color 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // Adicionar hover effect
    toggleButton.addEventListener('mouseenter', () => {
        toggleButton.style.color = '#374151';
    });
    toggleButton.addEventListener('mouseleave', () => {
        toggleButton.style.color = '#6b7280';
    });

    // Evento de click
    toggleButton.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        toggleButton.innerHTML = getEyeIcon(isPassword ? 'open' : 'closed');
        toggleButton.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
        
        // Manter foco no input
        passwordInput.focus();
    });

    // Inserir botão no container do input
    const parent = passwordInput.parentElement;
    if (parent) {
        parent.style.position = 'relative';
        parent.appendChild(toggleButton);
        
        // Ajustar padding do input para acomodar o botão
        passwordInput.style.paddingRight = '40px';
    }
}

/**
 * Retorna o SVG do ícone de olho
 * @param {string} state - 'open' ou 'closed'
 * @returns {string} - SVG do ícone
 */
function getEyeIcon(state) {
    const icons = {
        open: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>`,
        closed: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`
    };
    return icons[state] || icons.closed;
}

// ============================================
// MÓDULO: SISTEMA DE NOTIFICAÇÕES (TOAST)
// ============================================

/**
 * Cria e gerencia o container de notificações
 */
function getToastContainer() {
    let container = document.getElementById('toast-container');
    
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }
    
    return container;
}

/**
 * Exibe uma notificação toast
 * @param {string} message - Mensagem a ser exibida
 * @param {string} type - Tipo: 'success' ou 'error'
 * @param {number} duration - Duração em ms (padrão: 5000)
 */
function showNotification(message, type = 'info', duration = 5000) {
    const container = getToastContainer();
    
    // Configurações de estilo por tipo
    const styles = {
        success: {
            background: '#10b981',
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
        },
        error: {
            background: '#ef4444',
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
        },
        info: {
            background: '#3b82f6',
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
        }
    };

    const style = styles[type] || styles.info;

    // Criar elemento toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${style.icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    // Estilos do toast
    toast.style.cssText = `
        background: ${style.background};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 300px;
        max-width: 400px;
        pointer-events: auto;
        animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;

    container.appendChild(toast);

    // Auto-remover após delay
    setTimeout(() => {
        hideNotification(toast);
    }, duration);

    return toast;
}

/**
 * Remove uma notificação com animação
 * @param {HTMLElement} toast - Elemento toast
 */
function hideNotification(toast) {
    toast.style.animation = 'slideOutRight 0.4s ease forwards';
    
    setTimeout(() => {
        toast.remove();
    }, 400);
}

// ============================================
// MÓDULO: LEMBRAR-ME (REMEMBER ME)
// ============================================

/**
 * Inicializa a funcionalidade "Lembrar-me"
 */
function initializeRememberMe() {
    const emailInput = document.getElementById('email');
    const form = document.getElementById('login-form');
    
    if (!emailInput || !form) return;

    // Criar checkbox "Lembrar-me"
    const rememberContainer = document.createElement('div');
    rememberContainer.className = 'remember-container';
    rememberContainer.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 16px 0;
    `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'rememberMe';
    checkbox.style.cssText = `
        width: 16px;
        height: 16px;
        cursor: pointer;
        accent-color: #3b82f6;
    `;

    const label = document.createElement('label');
    label.htmlFor = 'rememberMe';
    label.textContent = 'Lembrar-me';
    label.style.cssText = `
        cursor: pointer;
        font-size: 0.875rem;
        color: #4b5563;
        user-select: none;
    `;

    rememberContainer.appendChild(checkbox);
    rememberContainer.appendChild(label);

    // Inserir antes do botão de submit
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.parentElement?.insertBefore(rememberContainer, submitButton);
    } else {
        form.appendChild(rememberContainer);
    }

    // Restaurar email salvo
    const savedEmail = localStorage.getItem('ssa-login-email');
    if (savedEmail) {
        emailInput.value = savedEmail;
        checkbox.checked = true;
    }

    // Salvar/remover ao marcar/desmarcar
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const email = emailInput.value.trim();
            if (email) {
                localStorage.setItem('ssa-login-email', email);
            }
        } else {
            localStorage.removeItem('ssa-login-email');
        }
    });

    // Atualizar ao digitar email
    emailInput.addEventListener('input', () => {
        if (checkbox.checked) {
            localStorage.setItem('ssa-login-email', emailInput.value);
        }
    });

    // Salvar no submit se marcado
    form.addEventListener('submit', () => {
        if (checkbox.checked) {
            localStorage.setItem('ssa-login-email', emailInput.value);
        } else {
            localStorage.removeItem('ssa-login-email');
        }
    });
}

// ============================================
// MÓDULO: ESTADO DE LOADING
// ============================================

/**
 * Manipula o processo de login com loading
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 */
async function handleLogin(email, password) {
    const submitButton = document.querySelector('button[type="submit"]');
    if (!submitButton) return;

    // Guardar estado original
    const originalContent = submitButton.innerHTML;
    
    // Mostrar loading
    setLoadingState(submitButton, true);

    try {
        // Simular chamada API (2 segundos)
        await simulateApiCall();

        // Simular sucesso (em produção, validar resposta da API)
        showNotification('Login realizado com sucesso!', 'success');
        
        // Aqui você redirecionaria para a página principal
        console.log('Login bem-sucedido:', { email });
        
        // Exemplo: window.location.href = '/dashboard';
        
    } catch (error) {
        showNotification('Erro ao fazer login. Tente novamente.', 'error');
        console.error('Erro no login:', error);
    } finally {
        // Restaurar botão
        setLoadingState(submitButton, false, originalContent);
    }
}

/**
 * Simula uma chamada de API com delay
 * @param {number} delay - Tempo de delay em ms
 * @returns {Promise<void>}
 */
function simulateApiCall(delay = 2000) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Alterna o estado de loading do botão
 * @param {HTMLButtonElement} button - Botão
 * @param {boolean} isLoading - Estado de loading
 * @param {string} originalContent - Conteúdo original (para restaurar)
 */
function setLoadingState(button, isLoading, originalContent = '') {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = `
            <span class="spinner"></span>
            <span>Entrando...</span>
        `;
        button.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            opacity: 0.8;
            cursor: not-allowed;
        `;
        
        // Adicionar estilos do spinner se não existirem
        if (!document.getElementById('spinner-styles')) {
            const style = document.createElement('style');
            style.id = 'spinner-styles';
            style.textContent = `
                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    } else {
        button.disabled = false;
        button.innerHTML = originalContent || 'Entrar';
        button.style.cssText = '';
    }
}

// ============================================
// MÓDULO: MELHORIAS UX
// ============================================

/**
 * Inicializa animações e melhorias de UX nos inputs
 */
function initializeInputAnimations() {
    // Adicionar estilos de animação globais
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInRight {
            from { 
                opacity: 0; 
                transform: translateX(100%) scale(0.9); 
            }
            to { 
                opacity: 1; 
                transform: translateX(0) scale(1); 
            }
        }
        
        @keyframes slideOutRight {
            from { 
                opacity: 1; 
                transform: translateX(0) scale(1); 
            }
            to { 
                opacity: 0; 
                transform: translateX(100%) scale(0.9); 
            }
        }
        
        /* Animações nos inputs */
        input[type="email"],
        input[type="password"],
        input[type="text"] {
            transition: all 0.3s ease;
        }
        
        input[type="email"]:focus,
        input[type="password"]:focus,
        input[type="text"]:focus {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        /* Estado de erro no input */
        .input-group.error input {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
        
        /* Hover nos botões */
        button[type="submit"] {
            transition: all 0.3s ease;
        }
        
        button[type="submit"]:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.4);
        }
        
        button[type="submit"]:active:not(:disabled) {
            transform: translateY(0);
        }
        
        /* Focus visible para acessibilidade */
        button:focus-visible,
        input:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }
        
        /* Checkbox animado */
        input[type="checkbox"] {
            transition: transform 0.2s ease;
        }
        
        input[type="checkbox"]:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);

    // Focus management - focar no primeiro campo ao carregar
    const emailInput = document.getElementById('email');
    if (emailInput && !emailInput.value) {
        setTimeout(() => emailInput.focus(), 100);
    }

    // Enter para navegar entre campos
    const inputs = document.querySelectorAll('#login-form input');
    inputs.forEach((input, index) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && index < inputs.length - 1) {
                e.preventDefault();
                inputs[index + 1].focus();
            }
        });
    });
}

// ============================================
// UTILITÁRIOS
// ============================================

/**
 * Debounce para otimizar eventos frequentes
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function}
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Exportar funções para uso global (útil para debug)
 */
window.SSALogin = {
    showNotification,
    validateEmail,
    validatePassword,
    setLoadingState
};
