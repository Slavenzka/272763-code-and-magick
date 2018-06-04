var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var DIAGRAM_HEIGHT = 150;
var DIAGRAM_BOTTOM = 30;
var CAPTION_BOTTOM = 10;
var HEADING_Y = 50;
var HEADING_GAP = 20;
var AVOID_TRANSPARENCY = 0.2;

var getMaxElement = function (arrayResults) {
  var maxResultValue = Math.round(arrayResults[0]);

  for (var i = 0; i < arrayResults.length; i++) {
    if (Math.round(arrayResults[i]) > maxResultValue) {
      maxResultValue = Math.round(arrayResults[i]);
    }
  }

    return maxResultValue;
};

var renderCloud = function (ctx, startX, startY, cloudWidth, cloudHeight, color) {
  ctx.beginPath();
  ctx.rect(startX, startY, cloudWidth, cloudHeight);
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, "rgba(0, 0 , 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, "rgb(255, 255, 255)");


  ctx.font = "16px PT Mono";
  ctx.baseline = "hanging";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText("Ура! Вы победили!", CLOUD_X + CLOUD_WIDTH / 3, HEADING_Y);
  ctx.fillText("Список результатов:", CLOUD_X + CLOUD_WIDTH / 3, HEADING_Y + HEADING_GAP);

  for (i = 0; i < names.length; i++) {
    var columnHeight = Math.round(times[i]) * DIAGRAM_HEIGHT / getMaxElement(times);

    ctx.beginPath();
    ctx.rect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - DIAGRAM_BOTTOM - columnHeight, COLUMN_WIDTH, columnHeight);
    var columnColor = "rgba(0, 0, 255, " + (Math.random() + AVOID_TRANSPARENCY).toString() + ")";
    ctx.fillStyle = columnColor;
    ctx.strokeStyle = columnColor;
    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    }

    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - CAPTION_BOTTOM);
    ctx.font = "10px PT Mono";
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT);
    ctx.font = "16px PT Mono";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }
};
