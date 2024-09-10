function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(tabId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Default to show the Privacy Policy tab
document.addEventListener('DOMContentLoaded', () => openTab('privacy-policy'));
