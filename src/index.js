import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4> Attention !</h4>
          Vous êtes sûr ?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Elharem Soufiane" date="à 10h30" content="Hello !!" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Hicham" date="à 12h30" content="Hi !!" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Samir" date="à 14h" content="Salut !!" />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
