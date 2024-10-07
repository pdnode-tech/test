// 请求通知权限
if (Notification.permission !== "granted") {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      sendNotification();
    }
  });
} else {
  sendNotification();
}

function sendNotification() {
  const notification = new Notification("标题", {
    body: "这是通知的内容",
  });

  // 添加点击事件
  notification.onclick = () => {
    window.open("https://example.com"); // 点击通知后的操作
  };
}
