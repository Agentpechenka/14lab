document.getElementById('s').addEventListener('click', () => {
    const element = document.getElementById('resume');
    html2pdf()
        .from(element)
        .save('resume.pdf');
});
