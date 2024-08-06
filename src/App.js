import React from 'react';
import ListComponent from './coding/components/ListComponent'; // Adjust path if necessary
import CounterComponent from './coding/components/CounterComponent'; // Adjust path if necessary
import FetchComponent from './coding/components/FetchComponent'; // Adjust path if necessary
import FormComponent from './coding/components/FormComponent'; // Adjust path if necessary
import PaginationComponent from './coding/components/PaginationComponent'; // Adjust path if necessary
import Routing from './coding/components/RouterComponent'; // Adjust path if necessary
import ChartComponent from './coding/components/ChartComponent'; // Adjust path if necessary
import AuthComponent from './coding/components/AuthComponent'; // Adjust path if necessary
import DradAndDrop from './coding/components/InfiniteScroll';
import FilterSortList from './coding/components/InfiniteScroll';
import FormComponents from './coding/components/InfiniteScroll';
import HookComponents from './coding/components/InfiniteScroll';
import InfiniteScroll from './coding/components/InfiniteScroll';
import ListComponent from './coding/components/InfiniteScroll';
import MemoComponent from './coding/components/InfiniteScroll';
import ToolTip from './coding/components/InfiniteScroll';
import InfiniteScroll from './coding/components/InfiniteScroll';
import InfiniteScroll from './coding/components/InfiniteScroll';
import InfiniteScroll from './coding/components/InfiniteScroll'; 
const App = () => {
  // Sample data for ListComponent and PaginationComponent
  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];

  return (
    <div className="App" style={styles.app}>
      <h1 style={styles.header}>React Components Showcase</h1>
      
      <section style={styles.section}>
        <h2>List of Items</h2>
        <ListComponent items={items} />
      </section>
      
      <section style={styles.section}>
        <h2>Counter</h2>
        <CounterComponent />
      </section>

      <section style={styles.section}>
        <h2>Fetched Data</h2>
        <FetchComponent />
      </section>

      <section style={styles.section}>
        <h2>Form</h2>
        <FormComponent />
      </section>

      <section style={styles.section}>
        <h2>Pagination</h2>
        <PaginationComponent items={items} itemsPerPage={5} />
      </section>

      <section style={styles.section}>
        <h2>Router</h2>
        <Routing />
      </section>

      <section style={styles.section}>
        <h2>Chart</h2>
        <ChartComponent />
      </section>

      <section style={styles.section}>
        <h2>Authentication</h2>
        <AuthComponent />
      </section>

      <section style={styles.section}>
        <h2>Infinite Scroll</h2>
        <InfiniteScroll />
      </section>

      <section style={styles.section}>
        <h2>List</h2>
        <ListComponents />
      </section>

      <section style={styles.section}>
        <h2>Memo</h2>
        <MemoComponent />
      </section>

      <section style={styles.section}>
        <h2>Pagination</h2>
        <PaginationComponent />
      </section>

      <section style={styles.section}>
        <h2>Tool</h2>
        <ToolTip />
      </section>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
};

export default App;
