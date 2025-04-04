import "./App.css";

const Chart = ({ weight, light_absorption, lifespan, bandgap }) => {
  return (
    <>
      <div className="chart">
        <h2 style={{ fontVariant: "small-caps" }}>Optimization Zones</h2>
        <table>
          <tbody>
            <tr>
              <td className="name">Weight:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: weight * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">{Math.round(weight * 100) / 100}/10</td>
            </tr>
            <tr>
              <td className="name">Reactivity:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: light_absorption * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">
                {Math.round(light_absorption * 100) / 100}/10
              </td>
            </tr>
            <tr>
              <td className="name">Activation Energy:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: lifespan * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">{Math.round(lifespan * 100) / 100}/10</td>
            </tr>
            <tr>
              <td className="name">Bandgap:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: bandgap * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">{Math.round(bandgap * 100) / 100}/10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Chart;
