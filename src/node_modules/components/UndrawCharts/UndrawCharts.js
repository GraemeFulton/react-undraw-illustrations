import React from "react";
import PropTypes from "prop-types";

const UndrawCharts = props => (
  <svg
    style={{height:props.height, width:'100%'}}
    className={props.class}
    id="065133f1-0c7b-47ed-9e2f-c288956210ed"
    data-name="Layer 1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 884 612"
  >
    <defs>
      <linearGradient
        id="b9919503-a474-45e1-b036-765a035e174e"
        x1={442}
        y1={612}
        x2={442}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="d77fd9f8-d5e5-4f04-90d1-c6bbf7709bc3"
        x1={844.74}
        y1={532}
        x2={844.74}
        y2={314}
        xlinkHref="#b9919503-a474-45e1-b036-765a035e174e"
      />
      <linearGradient
        id="24926ec8-71e4-4374-a303-d4b954cac4d9"
        x1={735.74}
        y1={531.99}
        x2={735.74}
        y2={387.27}
        xlinkHref="#b9919503-a474-45e1-b036-765a035e174e"
      />
      <linearGradient
        id="8c28d63e-5ee4-4ce7-a6bc-0d098832b513"
        x1={738.74}
        y1={438.26}
        x2={738.74}
        y2={314.01}
        xlinkHref="#b9919503-a474-45e1-b036-765a035e174e"
      />
    </defs>
    <title>charts</title>
    <rect
      width={884}
      height={612}
      fill="url(#b9919503-a474-45e1-b036-765a035e174e)"
    />
    <rect x={11} y={9} width={865} height={576} fill="#fff" />
    <rect x={11} y={9} width={865} height={57} fill="#bdbdbd" />
    <circle cx={51.91} cy={37.5} r={14} fill="#ff5252" />
    <circle cx={92} cy={37.5} r={14} fill="#ff0" />
    <circle cx={132.09} cy={37.5} r={14} fill="#69f0ae" />
    <rect x={92} y={125} width={147} height={17} fill="#e0e0e0" />
    <rect x={92} y={153} width={147} height={17} fill="#e0e0e0" />
    <rect x={92} y={181} width={245} height={17} fill="#e0e0e0" />
    <rect x={92} y={209} width={291} height={17} fill="#e0e0e0" />
    <rect x={104} y={315} width={44} height={206} fill="#f5f5f5" />
    <rect x={177} y={315} width={44} height={206} fill="#f5f5f5" />
    <rect x={250} y={315} width={44} height={206} fill="#f5f5f5" />
    <rect x={323} y={315} width={44} height={206} fill="#f5f5f5" />
    <rect x={104} y={418} width={44} height={103} fill="#2196f3" />
    <g opacity={0.4}>
      <rect x={104} y={375} width={44} height={45} fill="#2196f3" />
    </g>
    <rect x={177} y={440.36} width={44} height={80.64} fill="#69f0ae" />
    <rect
      x={177}
      y={388}
      width={44}
      height={52.36}
      fill="#69f0ae"
      opacity={0.4}
    />
    <rect x={250} y={403} width={44} height={118} fill={props.primaryColor} />
    <rect x={250} y={362} width={44} height={41} fill={props.primaryColor} opacity={0.4} />
    <rect x={323} y={444} width={44} height={77} fill="#ff0" />
    <rect x={323} y={420} width={44} height={24} fill="#ff0" opacity={0.4} />
    <path
      d="M790.5,314H790V532h.52a109,109,0,0,0,0-218Z"
      transform="translate(-158 -144)"
      fill="url(#d77fd9f8-d5e5-4f04-90d1-c6bbf7709bc3)"
    />
    <path
      d="M687.5,387.27A109.05,109.05,0,0,0,790,532V438.26Z"
      transform="translate(-158 -144)"
      fill="url(#24926ec8-71e4-4374-a303-d4b954cac4d9)"
    />
    <path
      d="M790,314A109,109,0,0,0,687.5,387.27l102.48,51Z"
      transform="translate(-158 -144)"
      fill="url(#8c28d63e-5ee4-4ce7-a6bc-0d098832b513)"
    />
    <path
      d="M790.5,319H790V527h.5a104,104,0,0,0,0-208Z"
      transform="translate(-158 -144)"
      fill={props.primaryColor}
    />
    <path
      d="M692.22,388.91A104.05,104.05,0,0,0,790,527V437.56Z"
      transform="translate(-158 -144)"
      fill="#2196f3"
    />
    <path
      d="M790,319a104,104,0,0,0-97.78,69.9L790,437.56Z"
      transform="translate(-158 -144)"
      fill="#69f0ae"
    />
    <rect x={524} y={410} width={13} height={14} fill="#2196f3" />
    <rect x={632} y={410} width={13} height={14} fill="#7c4dff" />
    <rect x={740} y={410} width={13} height={14} fill="#69f0ae" />
    <rect x={541} y={413} width={45} height={8} fill="#f5f5f5" />
    <rect x={650} y={413} width={45} height={8} fill="#f5f5f5" />
    <rect x={759} y={413} width={45} height={8} fill="#f5f5f5" />
  </svg>
);

UndrawCharts.propTypes = {
  /**
   * Hex color
   */
  primaryColor: PropTypes.string,
  /**
   * percentage
   */
  height: PropTypes.string,
  /**
   * custom class for svg
   */
  class: PropTypes.string
};

UndrawCharts.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};

export default UndrawCharts;
