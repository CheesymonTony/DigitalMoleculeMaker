import "./App.css";

const Chart = ({ weight, potency, toxicity, synthesizability }) => {
  console.log("weight", weight);
  console.log("potency", potency);
  console.log("toxicity", toxicity);
  console.log("synthesizability", synthesizability);
  return (
    <>
      <div className="chart">
        <h2 style={{ fontVariant: "small-caps" }}>Molecule Properties</h2>
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
              <td className="name">Potency:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: potency * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">{Math.round(potency * 100) / 100}/10</td>
            </tr>
            <tr>
              <td className="name">Toxicity:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: toxicity * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">{Math.round(toxicity * 100) / 100}/10</td>
            </tr>
            <tr>
              <td className="name">Synthesizability:</td>
              <td>
                <div
                  className="bar"
                  style={{ width: synthesizability * 200 + "%" }}
                ></div>
              </td>
              <td className="stat">
                {Math.round(synthesizability * 100) / 100}/10
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Chart;
