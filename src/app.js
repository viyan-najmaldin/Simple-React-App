const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello Members"),
    React.createElement(Member, {
      memberName: "Viyan",
      study: "Software Engineering",
      hobbies: "Coding",
    }),
    React.createElement(Member, {
      memberName: "Viky",
      study: "Software Engineering",
      hobbies: "Drawing",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
