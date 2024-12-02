// scripts/main.js

function analyzePayslips() {
    const input = document.getElementById('payslip-upload');
    const resultDiv = document.getElementById('analysis-result');

    // Placeholder logic for file analysis
    if (input.files.length === 0) {
        resultDiv.innerHTML = '<p>Please upload at least one payslip.</p>';
        return;
    }

    // Displaying a simple message for now
    resultDiv.innerHTML = `<p>Analyzing ${input.files.length} payslip(s)...</p>`;

    // need to add logic of analyser
}

// Add event listener to the analyze button
document.getElementById('analyze-button').addEventListener('click', analyzePayslips);
