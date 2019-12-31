import React from "react"
import { Link } from 'gatsby'

const AllTagsTemplates = ({data, pageContext}) => {
  const { tags } = pageContext;
  return (
    <div>
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`/tag/${tagName}`}>
                  {tagName}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default AllTagsTemplates;