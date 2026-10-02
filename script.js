// script.js - Quiz 5 câu ngắn về nội dung trang
document.addEventListener('DOMContentLoaded', function () {
  const quiz = [
    {
      q: "Đại tướng Đoàn Khuê sinh năm nào?",
      choices: ["1920", "1923", "1930", "1925"],
      a: 1
    },
    {
      q: "Bí danh của Đoàn Khuê là gì?",
      choices: ["Võ Tiến Trình", "Nguyễn Văn A", "Trần Văn B", "Phạm Minh C"],
      a: 0
    },
    {
      q: "Năm nào ông bị bắt và kết án tù ở nhà lao Quảng Trị?",
      choices: ["1939", "1940", "1945", "1948"],
      a: 1
    },
    {
      q: "Ông từng là Chính ủy của trung đoàn nào trong giai đoạn 1948-1954?",
      choices: ["Trung đoàn 84", "Trung đoàn 10", "Trung đoàn 200", "Trung đoàn 5"],
      a: 0
    },
    {
      q: "Trong mùa Xuân 1975, ông góp phần vào chiến dịch giải phóng thành phố nào?",
      choices: ["Hà Nội", "Huế", "Đà Nẵng", "Cần Thơ"],
      a: 2
    }
  ];

  // Tạo giao diện quiz
  const container = document.createElement('div');
  container.className = 'quiz-container';
  container.style.maxWidth = '720px';
  container.style.margin = '24px auto';
  container.style.background = '#fff';
  container.style.padding = '16px';
  container.style.borderRadius = '8px';
  container.style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)';

  const title = document.createElement('h3');
  title.textContent = 'Kiểm tra nhanh: 5 câu về Đại tướng Đoàn Khuê';
  container.appendChild(title);

  const form = document.createElement('form');
  quiz.forEach((item, idx) => {
    const qDiv = document.createElement('div');
    qDiv.style.marginBottom = '12px';

    const qTitle = document.createElement('p');
    qTitle.innerHTML = `<strong>Câu ${idx + 1}:</strong> ${item.q}`;
    qDiv.appendChild(qTitle);

    item.choices.forEach((ch, cidx) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      label.style.margin = '4px 0';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + idx;
      input.value = cidx;
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + ch));
      qDiv.appendChild(label);
    });

    form.appendChild(qDiv);
  });

  const submit = document.createElement('button');
  submit.type = 'button';
  submit.textContent = 'Nộp bài';
  submit.className = 'btn';
  submit.style.marginTop = '8px';

  const result = document.createElement('div');
  result.style.marginTop = '12px';
  result.style.fontWeight = '600';

  submit.addEventListener('click', function () {
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
      const sel = form.querySelector('input[name="q' + i + '"]:checked');
      if (sel && parseInt(sel.value, 10) === quiz[i].a) score++;
    }
    result.textContent = `Bạn đúng ${score} trên ${quiz.length} câu.`;
  });

  container.appendChild(form);
  container.appendChild(submit);
  container.appendChild(result);

  // Chèn quiz vào cuối trang nếu có main
  const main = document.querySelector('main') || document.body;
  main.appendChild(container);
});
