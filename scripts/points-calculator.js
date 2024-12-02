// scripts/points-calculator.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to form elements
    const ageSelect = document.getElementById('age');
    const englishSelect = document.getElementById('english');
    const overseasExperienceSelect = document.getElementById('overseas-experience');
    const ausExperienceSelect = document.getElementById('aus-experience');
    const educationSelect = document.getElementById('education');
    const specialistEducationCheckbox = document.getElementById('specialist-education');
    const australianStudyCheckbox = document.getElementById('australian-study');
    const regionalStudyCheckbox = document.getElementById('regional-study');
    const naatiCheckbox = document.getElementById('naati');
    const professionalYearCheckbox = document.getElementById('professional-year');
    const partnerSkillsSelect = document.getElementById('partner-skills');
    const totalPointsDisplay189 = document.getElementById('total-points-189');
    const totalPointsDisplay190 = document.getElementById('total-points-190');
    const totalPointsDisplay491 = document.getElementById('total-points-491');
    const resetButton = document.getElementById('reset-button');

    // Function to calculate total points
    function calculatePoints() {
        let totalPoints = 0;

        // Age
        totalPoints += parseInt(ageSelect.value);

        // English Language Ability
        totalPoints += parseInt(englishSelect.value);

        // Overseas Skilled Employment
        const overseasPoints = parseInt(overseasExperienceSelect.value);

        // Australian Skilled Employment
        const australianPoints = parseInt(ausExperienceSelect.value);

        // Employment Experience Points (no cap as per your request)
        totalPoints += overseasPoints + australianPoints;

        // Educational Qualifications
        totalPoints += parseInt(educationSelect.value);

        // Specialist Educational Qualification
        if (specialistEducationCheckbox.checked) {
            totalPoints += parseInt(specialistEducationCheckbox.value);
        }

        // Australian Study Requirement
        if (australianStudyCheckbox.checked) {
            totalPoints += parseInt(australianStudyCheckbox.value);
        }

        // Study in Regional Australia
        if (regionalStudyCheckbox.checked) {
            totalPoints += parseInt(regionalStudyCheckbox.value);
        }

        // NAATI
        if (naatiCheckbox.checked) {
            totalPoints += parseInt(naatiCheckbox.value);
        }

        // Professional Year
        if (professionalYearCheckbox.checked) {
            totalPoints += parseInt(professionalYearCheckbox.value);
        }

        // Partner Skills
        totalPoints += parseInt(partnerSkillsSelect.value);

        // Update the displays
        totalPointsDisplay189.textContent = totalPoints;

        // 190 Visa adds 5 points
        totalPointsDisplay190.textContent = totalPoints + 5;

        // 491 Visa adds 15 points
        totalPointsDisplay491.textContent = totalPoints + 15;

        // Add highlight effect
        [totalPointsDisplay189, totalPointsDisplay190, totalPointsDisplay491].forEach(display => {
            display.classList.add('highlight');
            setTimeout(() => {
                display.classList.remove('highlight');
            }, 500);
        });
    }

    // Add event listeners to form elements
    const formElements = [
        ageSelect,
        englishSelect,
        overseasExperienceSelect,
        ausExperienceSelect,
        educationSelect,
        specialistEducationCheckbox,
        australianStudyCheckbox,
        regionalStudyCheckbox,
        naatiCheckbox,
        professionalYearCheckbox,
        partnerSkillsSelect
    ];

    formElements.forEach(element => {
        element.addEventListener('change', calculatePoints);
    });

    // Initialize points calculation
    calculatePoints();

    // Info Link Click Handler
    const infoLinks = document.querySelectorAll('.info-link');

    infoLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const infoId = this.getAttribute('data-info');
            const infoText = document.getElementById(infoId);

            // Toggle the clicked explanation
            if (infoText.style.display === 'block') {
                infoText.style.display = 'none';
            } else {
                // Close other open explanations
                document.querySelectorAll('.info-text').forEach(info => {
                    info.style.display = 'none';
                });
                infoText.style.display = 'block';
            }
        });
    });

    // Reset Button Click Handler
    resetButton.addEventListener('click', function() {
        // Reset all form elements to their default values
        ageSelect.selectedIndex = 0;
        englishSelect.selectedIndex = 0;
        overseasExperienceSelect.selectedIndex = 0;
        ausExperienceSelect.selectedIndex = 0;
        educationSelect.selectedIndex = 0;
        partnerSkillsSelect.selectedIndex = 0;

        specialistEducationCheckbox.checked = false;
        australianStudyCheckbox.checked = false;
        regionalStudyCheckbox.checked = false;
        naatiCheckbox.checked = false;
        professionalYearCheckbox.checked = false;

        // Hide all info texts
        document.querySelectorAll('.info-text').forEach(info => {
            info.style.display = 'none';
        });

        // Recalculate points
        calculatePoints();
    });
});
