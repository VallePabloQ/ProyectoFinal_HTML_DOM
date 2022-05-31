var echarts = require("echarts");
var $ = require("jquery");
require("echarts/config");
require("echarts/chart/tree");
var tokenizer = require("./tokenizer");
var parser = require("./parser");
function draw() {
  var myChart = echarts.init(document.getElementById("main"));
  var option = {
    title: {
      text: "DOM UMG Proyecto"
    },
    toolbox: {
      show: false,
      feature: {
        restore: {
          show: false
        },
        saveAsImage: {
          show: false
        }
      }
    },
    series: [
      {
        name: "grafica",
        type: "tree",
        orient: "vertical", // vertical horizontal
        rootLocation: {
          x: "left",
          y: "center"
        },
        nodePadding: 8,
        layerPadding: 100,
        hoverable: false,
        roam: true,
        symbolSize: 6,
        itemStyle: {
          normal: {
            color: "#4883b4",
            label: {
              show: true,
              position: "right",
              formatter: "{b}",
              textStyle: {
                color: "#000",
                fontSize: 5
              }
            },
            lineStyle: {
              color: "#ccc",
              type: "solid" // 'curve'|'broken'|'solid'|'dotted'|'dashed'
            },
            areaStyle: {
              color: "#000"
            }
          },
          emphasis: {
            color: "#4883b4",
            label: {
              show: false
            },
            borderWidth: 0
          }
        },

        data: [parser(tokenizer($("#html").val()))]
      }
    ]
  };
  myChart.setOption(option);
}

$("#html").keyup(function () {
  draw();
});

var tmp = "Escribe aquí tu html";

$("#html").val(tmp);
draw();
