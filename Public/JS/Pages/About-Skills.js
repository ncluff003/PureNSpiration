import Chart from 'chart.js/auto';
import * as API from './../API-Calls';

const renderChart = (skills) => {
  const labels = skills.skills.map((skill) => skill.title);
  const proficiencyLabels = skills.skillProficiencies.map((skill) => skill);
  const proficiencies = skills.skills.map((skill) => skill.proficiency);
  const bgColors = skills.skills.map((skill) => skill.backgroundColor);
  const borderColors = skills.skills.map((skill) => skill.borderColor);
  console.log(labels, proficiencyLabels, proficiencies, bgColors, borderColors);
  const ctx = document.getElementById('skillChart');
  const grid = document.querySelector('.grid');

  const mySkills = new Chart(ctx, {
    type: `bar`,
    data: {
      labels: labels,
      datasets: [
        {
          label: `My Skill Proficiency`,
          data: proficiencies,
          backgroundColor: bgColors,
          borderColor: borderColors,
          borderWidth: 2,
        },
      ],
    },
    options: {
      indexAxis: 'x',
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
              weight: 'bold',
              family: 'Roboto Condensed',
            },
            color: '#FFD700',
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 16,
              weight: 'bold',
              family: 'Roboto Condensed',
            },
            color: '#00b358',
            callback: function (value, index, ticks) {
              if (value % 1 === 0) {
                return `${value} | ${proficiencyLabels[index]}`;
              }
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 40,
              family: `Roboto Slab`,
              weight: `bold`,
            },
          },
        },
      },
    },
  });
  return mySkills;
};

export const watchSkills = async () => {
  if (window.location.href === `http://127.0.0.1:3333/about/skills`) {
    console.log(`Skills`);
    const mySkills = await API.fetchSkills();
    console.log(mySkills);
    const iconTitle = document.querySelector('.icon-container__text');
    iconTitle.textContent = mySkills.title;

    let chart = renderChart(mySkills);
    console.log(chart);
    return chart;
  }
};
