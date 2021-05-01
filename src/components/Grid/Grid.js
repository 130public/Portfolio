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

  const Grid = styled.ul`
    margin:0;
    padding:0;
    display: grid;
    width: 100%;
    flex-flow: row wrap;
    margin-bottom: var(--gutter-sm);
    grid-template-columns: ${(props) => `repeat(auto-fill, minmax(${props.minColWidth || '25%'}, 1fr)) `};
    grid-auto-rows: 1fr;
    grid-gap: var(--gutter-sm);
  `;

const GridComponent = (props) => {
  const {items} = props;
  return (
    <Grid>
      {Object.keys(items).map((itemKey) => onRenderGridItem({ item: items[itemKey], key: itemKey }))}
    </Grid>
  )
}

export default GridComponent;