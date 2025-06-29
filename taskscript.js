document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');

    if (mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            primaryNav.setAttribute('data-visible', !isExpanded);
        });
    }

    // Tab System - Simplified Version
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    function activateTab(tab) {
        // Deactivate all tabs
        tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove('active');
        });

        // Deactivate all panels
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
            panel.hidden = true;
        });

        // Activate clicked tab
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('active');

        // Show associated panel
        const panelId = tab.getAttribute('aria-controls');
        document.getElementById(panelId).hidden = false;
        document.getElementById(panelId).classList.add('active');
    }

    // Click event for tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            activateTab(this);
        });
    });

    // Set first tab as active by default
    if (tabs.length > 0) {
        activateTab(tabs[0]);
    }

    // Current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();
});