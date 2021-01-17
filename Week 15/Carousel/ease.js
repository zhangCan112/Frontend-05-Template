export let linear = v => v;


function cubicBezier(x1, y1, x2, y2) {

    let getCoord = (t) => {
        // 如果t取值不在0到1之间，则终止操作
        if (t > 1 || t < 0) return;
        const _t = 1 - t;        
        const coefficient1 = 3 * t * Math.pow(_t, 2);
        const coefficient2 = 3 * _t * Math.pow(t, 2);
        const coefficient3 = Math.pow(t, 3);
        const px = coefficient1 * x1 + coefficient2 * x2 + coefficient3;
        const py = coefficient1 * y1 + coefficient2 * y2 + coefficient3;
        // 结果只保留三位有效数字
        return [parseFloat(px.toFixed(3)), parseFloat(py.toFixed(3))];
      }

   let getCoordsArray = (precision) => {
        const step = 1 / (precision + 1);
        const result = [];
        for (let t = 0; t <= precision + 1; t++) {
          result.push(getCoord(t * step));
        }        
        return result;
      }
    const precision = 100;
    let coords = getCoordsArray(precision);

   return (x) => {
        if (x >= 1) return 1;
        if (x <= 0) return 0;
        let startX = 0;
        for (let i = 0; i < coords.length; i++) {
          if (coords[i][0] >= x) {
            startX = i;
            break;
          }
        }
        const axis1 = coords[startX];
        const axis2 = coords[startX - 1];
        const k = (axis2[1] - axis1[1]) / (axis2[0] - axis1[0]);
        const b = axis1[1] - k * axis1[0];
        // 结果也只保留三位有效数字
        return parseFloat((k * x + b).toFixed(3));
      }
}

export let ease = cubicBezier(.25, .1, .25, 1);
export let easeIn = cubicBezier(.42, 0, 1, 1);
export let easeOut = cubicBezier(0, 0, .58, 1);
export let easeInOut = cubicBezier(42, 0, .58, 1);