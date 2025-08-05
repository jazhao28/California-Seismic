import calculateTotalShear from "./calculateTotalShear";
function examineWall(wall){



    
    wallGaps = {};
    for (const key in wall) {

        
        if (wall[key].length === 3) {
            wallGaps[key] = "midGap";
        }
        else if(wall[key].length === 2) {
            wallGaps[key] = "endGap";
    }
        else{
            wallGaps[key] = "noGap";
        }
    }
    wallLength = wall.length;
    if (wallLength == 3) {
        hasThreeWalls = true;
    }

    




};

export default function workflow({input, wall, hasThreeWalls, wallGaps}) {
    const { length, width, load } = input;
    const w = Number(load);
    const L = Number(width);
    const d = Number(length);

    const CalculateUnitShear = {
        title: "Calculate Unit Shear",
        content: null,

    };

    const CalculateMaxMoment = {
        title: "Calculate Max Moment",
        content: null,  
    };
    const CalculateMaxChordForce = {
        title: "Find Max Chord Force",
        content: null,
    };
    const CalculateReactionForce = {
        title: "Calculate Reaction Force On Every Shearwall",
        content: null,
    };
    const CalculateUnitWallShear = {
        title: "Calculate and Find The Unit Wall Shear For Walls With a Gap",
        content: null,
    };
    const CreateCollectorForceDiagram = {
        title: "Create Collector Force Diagram",
        content: null,
    };

    if (hasThreeWalls){
        CalculateUnitShear.content = (
            <div className="font-mono text-sm">
              {Object.keys(wallGaps).map((key) => {
                const totalShear = calculateTotalShear(w, L);
                const unitShear = totalShear / d;
                

                return(
                  <div key={key}>
                <MathJax>
                  {`\\(V_{${key}}=\\frac{wL}{2}=\\frac{${w}\\times${L}}{2}=${calculateTotalShear(w, L)}\\)`}
                </MathJax>
                <br />
                <MathJax>{`\\(v_${key}=\\frac{V}{d}=\\frac{${}})`}</MathJax>
                </div>
                )

              })}
                
            </div>
        );
        CalculateMaxMoment.content = (
            <div>
                <p>
                    Max bending occurs at <MathJax inline>{"\\(x=L/2 \\)"}</MathJax>
                </p>
                <span className="font-mono text-sm">
                    <MathJax inline>{"\\(M=\\frac{wL^2}{8} \\)"}</MathJax>
                </span>
            </div>
        );
        CalculateMaxChordForce.content = (
            <div className="font-mono text-sm">
                <MathJax>{"\\(C=\\frac{M}{d}\\)"}</MathJax>
            </div>
        );


    };




}   
 const workflow2 = [
    {
      title: "Calculate Reaction Force On Every Shearwall",
      content: (
        <div className="font-mono text-sm">
          <MathJax>{"\\(R_a=L/2*w\\)"}</MathJax>
          <br />
          <MathJax>{"\\(R_b=L/2*w \\)"}</MathJax>
        </div>
      ),
    },
    {
      title: "Calculate and Find The Unit Wall Shear For Walls With a Gap",
      content: (
        <div>
          <p>
            <MathJax inline>{"\\(v_x=\\frac{R_x}{d_x} \\)"}</MathJax>
          </p>
          <br></br>
          <p className="font-mono text-sm">
            <MathJax inline>{"\\(v_y=\\frac{R_y}{d_y} \\)"}</MathJax>
          </p>
        </div>
      ),
    },
    {
      title: "Calculate Max Collector Force",
      content: (
        <div className="font-mono text-sm">
          <p>Create Collector Force Diagram</p>
        </div>
      ),
    },
  ];

const workflow = [
    {
      title: "Calculate Unit Shear",
      content: (
        <div className="font-mono text-sm">
          <MathJax>{"\\(V=\\frac{wL}{2}\\)"}</MathJax>
          <br />
          <MathJax>{"\\(v=\\frac{V}{d} \\)"}</MathJax>
        </div>
      ),
    },
    {
      title: "Calculate Max Moment",
      content: (
        <div>
          <p>
            Max bending occurs at <MathJax inline>{"\\(x=L/2 \\)"}</MathJax>
          </p>
          <span className="font-mono text-sm">
            <MathJax inline>{"\\(M=\\frac{wL^2}{8} \\)"}</MathJax>
          </span>
        </div>
      ),
    },
    {
      title: "Find Max Chord Force",
      content: (
        <div className="font-mono text-sm">
          <MathJax>{"\\(C=\\frac{M}{d}\\)"}</MathJax>
        </div>
      ),
    },
  ];
  const description = "Chord forces are axial forces that develop in the perimeter elements (chords) of a diaphragm where it resists lateral loads, such as those from wind or seismic events."