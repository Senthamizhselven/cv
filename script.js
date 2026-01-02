(function () {
  // career start date - to calculate total xp
  const startDate = new Date(2018, 2);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  const summaryEl = document.getElementById("summary_exp");
  if(summaryEl) summaryEl.textContent = years;
  if (months < 0) {
    years--;
    months += 12;
  }

  const experienceText =
    months === 0
      ? `${years} years`
      : `${years} years ${months} months`;

  const el = document.getElementById("experience");
  if (el) el.textContent = experienceText;
})();
