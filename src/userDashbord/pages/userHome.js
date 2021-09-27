import React from "react";
import "./userDash.css";
import ChartistGraph from "react-chartist";

const data = {
  labels:['CO','NO2','HC','VOC'],
  series: [20, 10, 30, 40]
};

const options = {};

const type = "Pie";

const Info = () => {
  return (
    <main>
      <div className="page-header">
        <div>
          <h2>Analytics Dashbord</h2>
          <small>
            Monitor key metrics. Check reporting and review insights
          </small>
        </div>
        <div className="header-action">
          <button>
            <span className="las la-file-export">Actions</span>
          </button>
          <button>
            <span className="las la-file-import">Logout</span>
          </button>
        </div>
      </div>
      <div className="cardsD">
        <div className="card-singleD">
          <div className="card-flexD">
            <div className="card-infoD">
              <div className="card-header">
                <span>VOC</span>
                <small>Number of VOC</small>
              </div>
              <h2>679ppm</h2>
              <small>6% less VOC</small>
            </div>
            <div className="card-chart success">
              <span className="las la-chart-line"></span>
            </div>
          </div>
        </div>

        <div className="card-singleD">
          <div className="card-flexD">
            <div className="card-infoD">
              <div className="card-header">
                <span>CO</span>
                <small>Number of CO</small>
              </div>
              <h2>603ppm</h2>
              <small>2% less CO</small>
            </div>
            <div className="card-chart yellow">
              <span className="las la-chart-line"></span>
            </div>
          </div>
        </div>

        <div className="card-singleD">
          <div className="card-flexD">
            <div className="card-infoD">
              <div className="card-header">
                <span>NO2</span>
                <small>Number of NO2</small>
              </div>
              <h2>678ppm</h2>
              <small>5% less NO2</small>
            </div>
            <div className="card-chart danger">
              <span className="las la-chart-line"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="user-grid">
        <div className="analytics-card">
          <div className="anaytics-card">
            <div className="analytics-head">
              <h2>Actions needed</h2>
              <span className="las la-ellipsis-h"></span>
            </div>
            <div className="anyytics-chart">
              <div className="chart-circle">
                <h2>74%</h2>
              </div>
              <div className="analytics-not">
                <small>Note: Current maintainance needed</small>
              </div>
            </div>
            <div className="analytics-btn">
              <button>see Report</button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1rem", marginLeft: "10rem" }}>
        <ChartistGraph data={data} options={options} type={type} style={{width:'20rem',height:'20rem'}} />
         </div> 
      </div>
    </main>
  );
};

export default Info;
