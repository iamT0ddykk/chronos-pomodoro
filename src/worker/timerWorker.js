let isRunning = false;

self.onmessage = function (event) {
  console.log("Mensagem recebida:", event.data);

  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  let countDownSeconds = Math.ceil((endDate - Date.now()) / 1000);

  function tick() {
    console.log("Enviando:", countDownSeconds);

    self.postMessage(countDownSeconds);

    countDownSeconds = Math.floor((endDate - Date.now()) / 1000);
    console.log("Mensagem recebida:", event.data);
    setTimeout(tick, 1000);
  }

  tick();
};
