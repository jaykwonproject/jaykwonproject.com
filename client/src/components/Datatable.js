import React from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

function DataTable({ columns, data, postsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(data.length / postsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={() => handleClick(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
        {renderPagination()}
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
      </Pagination>
    </>
  );
}

export default DataTable;
