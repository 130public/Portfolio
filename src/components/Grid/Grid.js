import * as React from "react"
import styled from 'styled-components';

export const GridItem = styled.li`
  display: block;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  flex: 1 0 288px;
  justify-content: center;
`;

  const onRenderGridItem = ({ item, key: gridKey }) => {
    return (
      <GridItem className="Grid-item" key={gridKey}>
        {item}
      </GridItem>
    );
  };

  const onRenderGrid = ({ items = {}, className }) => {
    return (
      <ul className={'FlexGrid ' + className}>
        {Object.keys(items).map((itemKey) => onRenderGridItem({ item: items[itemKey], key: itemKey }))}
      </ul>
    );
  };

  const StyledGrid = styled(onRenderGrid)`
    display: grid;
    width: 100%;
    flex-flow: row wrap;
    margin-bottom: 24px;
    grid-template-columns: ${(props) => `repeat(auto-fill, minmax(${props.minColWidth || '30%'}, 1fr)) `};
    grid-auto-rows: 1fr;
    grid-gap: 16px;
  `;

const GridComponent = (props) => {
  return onRenderGrid(props);
}

export default GridComponent;