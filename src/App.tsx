import React from "react";
import "./App.css";
import FlexView from "react-flexview";
import * as _ from "lodash";

function App() {
  return (
    <FlexView className="App" hAlignContent="center">
      <FlexView column>
        <FlexView column className="group">
          {_.chunk(cards, 5).map((row, i) => (
            <FlexView className="row">
              {row.map((card) => (
                <img
                  className="card"
                  style={{ margin: "3px", width: "200px" }}
                  alt={card.name}
                  title={card.name}
                  src="https://img.scryfall.com/cards/normal/front/7/f/7f3fff7e-f34d-4a99-a805-bd66c4e9f0cb.jpg?1562614406"
                />
              ))}
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    </FlexView>
  );
}

export default App;

const cards = [
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
  {
    name: "Yasova Dragonclaw",
    imgUrl:
      "https://img.scryfall.com/cards/large/front/4/9/490994c6-9fef-482b-835d-a64350bfaa8d.jpg?1562824820",
  },
];
