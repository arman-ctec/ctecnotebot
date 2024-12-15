// Add event listeners to the study material and syllabus buttons to open Google Drive links
document.addEventListener('DOMContentLoaded', function() {
    const studyMaterialButtons = document.querySelectorAll('.study-material');
    const syllabusButtons = document.querySelectorAll('.syllabus');

    studyMaterialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const googleDriveLink = this.getAttribute('data-link');
            window.open(googleDriveLink, '_blank');
        });
    });

    syllabusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const googleDriveLink = this.getAttribute('data-link');
            window.open(googleDriveLink, '_blank');
        });
    });
});
