import * as React from "react"
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch,Hits,SearchBox,Configure} from 'react-instantsearch-dom';
import Card from '../Card/Card'

const HitsStyled = styled(Hits)`
  ul{
    margin:0;
    padding:0;
    display: grid;
    width: 100%;
    flex-flow: row wrap;
    margin-bottom: var(--gutter-sm);
    grid-template-columns: ${(props) => `repeat(auto-fill, minmax(${props.minColWidth || '25%'}, 1fr)) `};
    grid-auto-rows: 1fr;
    grid-gap: var(--gutter-sm);
  }
  li{
    list-style:none;
    display: block;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    flex: 1 0 100%;
    justify-content: center;
  }
`;

const searchClient = algoliasearch(
  'Z1PZEF7EGE',
  '810bbd7820b39442cccb8f035c6cf1e0'
);

const ResourcesComponent = (props) => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={"Resource"}>
        {/* <SearchBox /> */}
        <Configure hitsPerPage={props.hitsPerPage || 1000} />
        <HitsStyled minColWidth={props.colWidth || "25%"} hitComponent={Card} />
      </InstantSearch>
    </>
  );
}

export default ResourcesComponent