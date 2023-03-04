import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles/books.css';
import { Progress } from 'antd';
import { deleteBook } from '../../redux/books/bookSlice';
import progressBarLogic from './logic/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const { progress, chapter } = progressBarLogic();

  return (
    <div className="book_list_display flex">
      <div className="book_list_wrapper flex">
        <div className="contents_wrapper flex">
          <h2>Action</h2>
          <ul className="titles_wrapper flex">
            <li><h3>{author}</h3></li>
            <li><p className="blue">{title}</p></li>
          </ul>

          <div className="links_wrapper">
            <ul className="flex">
              <li><button type="button" className="comments">Comments</button></li>
              <div className="links_progress_bar flex" />
              <li><button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button></li>
              <li><button type="button">Edit</button></li>
            </ul>
          </div>
        </div>

        <div className="second_part flex">
          <div className="progress_bar">
            <Progress
              type="circle"
              width={80}
              format={() => ''}
              strokeWidth={10}
              strokeColor={{
                '0%': '#307bbe',
                '100%': '#379cf6',
              }}
              trailColor="#e8e8e8"
              percent={progress}
            />
            <div className="percent">
              <h2 id="percent">
                {progress}
                {' '}
                %
              </h2>
              <p>Completed</p>
            </div>
          </div>

          <div className="stats_wrapper">
            <div>
              <span />
            </div>
          </div>

          <div className="chapter_wrapper flex">
            <h2>CURRENT CHAPTER</h2>

            <p>
              Chapter
              {chapter}
              {' '}
            </p>

            <div className="chapter_button">
              <button type="button">Update Progress</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
