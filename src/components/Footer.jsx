import React from "react";

function Footer({amountActive, amountFinished}) {
    return (
        <footer className="footer-conteiner">
        <div className="footer">
          <div className="result-task">
            <span>{`Active tasks: ${amountActive}`} </span>
            <span style={{marginLeft:"10px"}}>{`Finished tasks: ${amountFinished}`}</span>
          </div>
          <div className="product">
            <span>Kanban board by Pavel 2023</span>
          </div>
        </div>
      </footer>
    )
}

export default Footer