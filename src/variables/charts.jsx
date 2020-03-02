// ##############################
//   Function that converts a hex color number to a RGB color number
// #############################
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
//   general variables for charts
// #############################

const chartColor = "#FFFFFF";


var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 15,
      bottom: 15
    }
  }
};

// ##############################
//   Dashboard COB1 view - Panel chart
// #############################

const dashboardCOB1ElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            25,
            50,
            75,
            125,
            200,
            250,
            150,
            100,
            50
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard COB1 view - Water Usage - Card
// #############################

const dashboardCOB1WaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            456,
            487,
            597,
            684,
            546,
            498,
            467,
            489,
            432
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            647,
            583,
            512,
            467,
            432,
            493,
            543,
            586,
            634
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard COB1 view - Gas - Card
// #############################

const dashboardCOB1GasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            347,
            423,
            496,
            523,
            564,
            493,
            473,
            389
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard COB2 view - Panel chart
// #############################

const dashboardCOB2ElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            24,
            56,
            73,
            115,
            190,
            243,
            167,
            113,
            53
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard COB2 view - Water Usage - Card
// #############################

const dashboardCOB2WaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            446,
            468,
            596,
            674,
            535,
            486,
            453,
            476,
            445
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            636,
            594,
            512,
            473,
            412,
            484,
            553,
            592,
            623
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard COB2 view - Gas - Card
// #############################

const dashboardCOB2GasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            356,
            418,
            485,
            535,
            575,
            483,
            464,
            370
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard KL view - Panel chart
// #############################

const dashboardKLElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            26,
            52,
            77,
            124,
            203,
            254,
            151,
            130,
            75
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard KL view - Water Usage - Card
// #############################

const dashboardKLWaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            447,
            472,
            581,
            690,
            552,
            475,
            467,
            489,
            412
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            628,
            590,
            542,
            464,
            472,
            443,
            574,
            572,
            694
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard KL view - Gas - Card
// #############################

const dashboardKLGasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            336,
            486,
            434,
            564,
            575,
            486,
            434,
            367
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SSB view - Panel chart
// #############################

const dashboardSSBElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            23,
            57,
            72,
            120,
            223,
            267,
            186,
            143,
            64
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard SSB view - Water Usage - Card
// #############################

const dashboardSSBWaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            437,
            497,
            572,
            656,
            583,
            494,
            473,
            492,
            410
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            654,
            586,
            545,
            413,
            465,
            423,
            586,
            556,
            645
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SSB view - Gas - Card
// #############################

const dashboardSSBGasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            363,
            487,
            497,
            523,
            576,
            454,
            412,
            376
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SSM view - Panel chart
// #############################

const dashboardSSMElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            34,
            65,
            89,
            132,
            204,
            243,
            164,
            143,
            93
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard SSM view - Water Usage - Card
// #############################

const dashboardSSMWaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            434,
            497,
            554,
            665,
            523,
            475,
            453,
            486,
            454
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            665,
            584,
            532,
            445,
            464,
            490,
            545,
            576,
            624
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SSM view - Gas - Card
// #############################

const dashboardSSMGasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            323,
            465,
            486,
            554,
            572,
            486,
            457,
            373
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SE1 view - Panel chart
// #############################

const dashboardSE1ElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            43,
            65,
            87,
            123,
            243,
            273,
            132,
            153,
            64
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard SE1 view - Water Usage - Card
// #############################

const dashboardSE1WaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            456,
            432,
            565,
            645,
            583,
            476,
            445,
            465,
            443
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            675,
            545,
            586,
            423,
            475,
            498,
            554,
            575,
            643
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SE1 view - Gas - Card
// #############################

const dashboardSE1GasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            354,
            434,
            476,
            534,
            575,
            486,
            454,
            396
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SE2 view - Panel chart
// #############################

const dashboardSE2ElectricityChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Electricity (kwh)",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            12,
            23,
            56,
            104,
            187,
            234,
            156,
            123,
            74
          ]
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true,
      fontColor: '#fff'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
//   Dashboard SE2 view - Water Usage - Card
// #############################

const dashboardSE2WaterUsageChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFillHot = ctx.createLinearGradient(0, 170, 0, 50);
    var gradientFillChill = ctx.createLinearGradient(0, 170,0,50);
    gradientFillHot.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFillHot.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    gradientFillChill.addColorStop(0, "rgba(128,182,244,0)");
    gradientFillChill.addColorStop(1, "rgba(17, 163, 224, 0.4)");
    return {
      labels: [
        "12AM",
        "3AM",
        "6AM",
        "9AM",
        "12PM",
        "3PM",
        "6PM",
        "9PM",
        "12AM"
      ],
      datasets: [
        {
          label: "Chill Water (G)",
          borderColor: "#32f9db",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#32f9db",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillChill,
          borderWidth: 2,
          data: [
            454,
            426,
            576,
            654,
            573,
            456,
            434,
            476,
            423
          ]
        }, {
          label: "Hot Water (G)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFillHot,
          borderWidth: 2,
          data: [
            656,
            534,
            598,
            454,
            423,
            456,
            523,
            545,
            634
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
//   Dashboard SE2 view - Gas - Card
// #############################

const dashboardSE2GasChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "12pm,",
        "3pm",
        "6pm",
        "9pm",
        "12am",
        "3am",
        "6am",
        "9am"
      ],
      datasets: [
        {
          label: "Natural Gas (Btu)",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [
            334,
            476,
            493,
            545,
            554,
            497,
            463,
            356
          ]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

module.exports = {
  dashboardKLElectricityChart,
  dashboardKLWaterUsageChart,
  dashboardKLGasChart,
  dashboardCOB1ElectricityChart,
  dashboardCOB1WaterUsageChart,
  dashboardCOB1GasChart,
  dashboardCOB2ElectricityChart,
  dashboardCOB2WaterUsageChart,
  dashboardCOB2GasChart,
  dashboardSSBElectricityChart,
  dashboardSSBWaterUsageChart,
  dashboardSSBGasChart,
  dashboardSSMElectricityChart,
  dashboardSSMWaterUsageChart,
  dashboardSSMGasChart,
  dashboardSE1ElectricityChart,
  dashboardSE1WaterUsageChart,
  dashboardSE1GasChart,
  dashboardSE2ElectricityChart,
  dashboardSE2WaterUsageChart,
  dashboardSE2GasChart
};
