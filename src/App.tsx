import React from "react";
import "./App.css";
import FlexView from "react-flexview";
import _ from "lodash";
import * as Scry from "scryfall-sdk";

type Props = {
  cardList: string[];
};

type State = {
  collection: Scry.Card[];
};

export class App extends React.Component<Props, State> {
  state = { collection: [] as Scry.Card[] };

  componentDidMount() {
    const identifiers = this.props.cardList.map((cardName) =>
      Scry.CardIdentifier.byName(cardName)
    );
    Scry.Cards.collection(...identifiers)
      .waitForAll()
      .then((collection) => {
        this.setState({ collection: collection });
      });
  }

  render() {
    const { collection } = this.state;
    const groups = [
      collection.filter(isMonoW).sort(byRarity),
      collection.filter(isMonoU).sort(byRarity),
      collection.filter(isMonoB).sort(byRarity),
      collection.filter(isMonoR).sort(byRarity),
      collection.filter(isMonoG).sort(byRarity),
      collection.filter(isMulticolor).sort(byRarity),
      collection.filter(isColorless).sort(byRarity),
      collection.filter(isLand).sort(byRarity),
    ];

    return (
      <FlexView className="App" hAlignContent="center">
        <FlexView column>
          {groups.map((group, i) => (
            <FlexView column className="group" key={i}>
              {_.chunk(group, 5).map((row, i) => (
                <FlexView className="row" key={i}>
                  {row.map((card, i) => (
                    <img
                      className="card"
                      alt={card.name}
                      title={card.name}
                      src={card.image_uris ? card.image_uris.normal : undefined}
                      key={i}
                    />
                  ))}
                </FlexView>
              ))}
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
    );
  }
}

export default App;

const isMonoW = (c: Scry.Card) =>
  c.colors && c.colors.length === 1 && c.colors.includes("W");
const isMonoU = (c: Scry.Card) =>
  c.colors && c.colors.length === 1 && c.colors.includes("U");
const isMonoB = (c: Scry.Card) =>
  c.colors && c.colors.length === 1 && c.colors.includes("B");
const isMonoR = (c: Scry.Card) =>
  c.colors && c.colors.length === 1 && c.colors.includes("R");
const isMonoG = (c: Scry.Card) =>
  c.colors && c.colors.length === 1 && c.colors.includes("G");
const isMulticolor = (c: Scry.Card) => c.colors && c.colors.length > 1;
const isColorless = (c: Scry.Card) =>
  c.colors && c.colors.length === 0 && !c.type_line.includes("Land");
const isLand = (c: Scry.Card) => c.type_line.includes("Land");

const byRarity = (a: Scry.Card, b: Scry.Card) => {
  const rarityScore = (r: string) =>
    r === "mythic" ? 0 : r === "rare" ? 1 : r === "uncommon" ? 2 : 3;
  return rarityScore(a.rarity) - rarityScore(b.rarity);
};
