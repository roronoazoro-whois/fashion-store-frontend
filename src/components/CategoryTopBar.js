import React, { useState } from "react"

import Filters from "./Filters"
import Icon from "./Icon"
import SortBy from "./SortBy"
import { Row, Button, Collapse } from "react-bootstrap"

const CategoryTopBar = ({ filter, slug, child, onFilterChange }) => {
  const [collapse, setCollapse] = useState(false)
  return (
    <header className="product-grid-header">
      {filter && (
        <div className="me-3 mb-3">
          <Button
            variant="link"
            className="text-dark ps-0 dropdown-toggle text-decoration-none"
            data-toggle="collapse"
            aria-expanded={collapse}
            onClick={() => setCollapse(!collapse)}
          >
            Bộ lọc
          </Button>
        </div>
      )}

      <div className="mb-3 d-flex align-items-center">
        <span className="d-inline-block me-2">Sắp xếp theo</span>
        <SortBy onFilterChange={onFilterChange} />
      </div>
      {filter && (
        <Collapse in={collapse} className="w-100">
          <div className="py-4 mb-5">
            <Row>
              <Filters
                top
                slug={slug}
                child={child}
                onFilterChange={onFilterChange}
              />
            </Row>
            <Button
              variant="link"
              className="d-flex align-items-center ps-0 ms-n3"
            >
              <Icon icon="close-1" className="w-3rem h-3rem me-n1" />
              Đặt lại mặc định
            </Button>
          </div>
        </Collapse>
      )}
    </header>
  )
}

export default CategoryTopBar
