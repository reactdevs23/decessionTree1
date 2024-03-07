import React from "react";
import classes from "./MainComponent.module.css";
import Condition from "../../images/Condition";
import YesRight from "../../images/YesRight";
import NoLeft from "../../images/NoLeft";
import Arrow from "../../images/Arrow";
import { LeftRight } from "../../images/LeftRight";
import Yes from "../../images/Yes";
import NoRight from "../../images/NoRight";
import LeftMiddle from "../../images/LeftMiddle";
import RightMiddle from "../../images/RightMiddle";

const MainComponent = ({
  step1,
  step2,
  step3a,
  step3b,
  step4a,
  step4b,
  step4c,
  step4d,
  step5a,
  step5b,
  step5c,
  step5d,
  arrowColor,
  data,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full py-20"
      style={{ background: "var(--mainBg) " }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          <div
            className={[classes.box, classes.start].join(" ")}
            style={{ "--bg": step1.bg }}
          >
            <h2 className={classes.label} style={{ "--color": step1.color }}>
              {step1.label}
            </h2>
            <div className={classes.arrow}>
              <Arrow color={arrowColor} />
            </div>
          </div>
          <div className={[classes.condition, classes.step2].join(" ")}>
            {" "}
            <Condition bg={step2.bg} />
            <p className={[classes.label, classes.conditionLabel].join(" ")}>
              {step2.label}
            </p>{" "}
            <div className={classes.noLeft}>
              <NoLeft color={arrowColor} />
            </div>
            <div className={classes.yesRight}>
              <YesRight color={arrowColor} />
            </div>
          </div>
          <div className={classes.step3Container}>
            <div
              className={[classes.box, classes.step3a].join(" ")}
              style={{ "--bg": step3a.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step3a.color }}>
                {step3a.label}
              </h2>
            </div>
            <div className={classes.condition}>
              {" "}
              <Condition bg={step3b.bg} />
              <p
                className={[classes.label, classes.conditionLabel].join(" ")}
                style={{ "--color": step3b.color }}
              >
                {step3b.label}
              </p>{" "}
              <div className={classes.noRight}>
                {" "}
                <NoRight color={arrowColor} />
              </div>
            </div>
          </div>
          <div className={classes.step4Container}>
            <div className={classes.step4abContainer}>
              <div
                className={[classes.box, classes.step4a].join(" ")}
                style={{ "--bg": step4a.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step4a.color }}
                >
                  {step4a.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step4b].join(" ")}
                style={{ "--bg": step4b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step4b.color }}
                >
                  {step4b.label}
                </h2>
              </div>
              <div className={classes.leftRight}>
                <LeftRight color={arrowColor} />
              </div>
            </div>
            <div className={classes.step4bcContainer}>
              <div
                className={[classes.box, classes.step4c].join(" ")}
                style={{ "--bg": step4c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step4c.color }}
                >
                  {step4c.label}
                </h2>
                <div className={classes.yes}>
                  <Yes color={arrowColor} />
                </div>
              </div>{" "}
              <div
                className={[classes.box, classes.step4d].join(" ")}
                style={{ "--bg": step4d.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step4d.color }}
                >
                  {step4d.label}
                </h2>
              </div>
            </div>
          </div>

          <div className={classes.step5Container}>
            <div className={classes.step5abContainer}>
              <div
                className={[classes.box, classes.step5a].join(" ")}
                style={{ "--bg": step5a.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step5a.color }}
                >
                  {step5a.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step5b].join(" ")}
                style={{ "--bg": step5b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step5b.color }}
                >
                  {step5b.label}
                </h2>
              </div>
              <div className={classes.leftMiddle}>
                <LeftMiddle color={arrowColor} />
              </div>
            </div>
            <div className={classes.step5cdContainer}>
              <div
                className={[classes.box, classes.step5c].join(" ")}
                style={{ "--bg": step5c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step5c.color }}
                >
                  {step5c.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step5d].join(" ")}
                style={{ "--bg": step5d.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step5d.color }}
                >
                  {step5d.label}
                </h2>
              </div>{" "}
              <div className={classes.rightMiddle}>
                <RightMiddle color={arrowColor} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.allData}>
          {data.map((el, i) => (
            <div
              className={classes.infoContainer}
              style={{ "--bg": el.bg }}
              key={i}
            >
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {" "}
                {el.info}
              </p>
              <h2
                className={classes.title}
                style={{ "--color": el.titleColor }}
              >
                {" "}
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
