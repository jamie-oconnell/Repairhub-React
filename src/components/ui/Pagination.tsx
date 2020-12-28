import React from "react";
import Button from "./Button";
import Icon from "./Icon";

interface Props {
  firstValue: number;
  lastValue: number;
  total: number;
  canNextPage: boolean;
  canPreviousPage: boolean;
}

const Pagination = ({
  firstValue,
  lastValue,
  total,
  canNextPage,
  canPreviousPage,
}: Props) => {
  return (
    <div>
      <span className="textstyle-body text-gray-60 mr-2">{`${firstValue}-${lastValue} of ${total}`}</span>
      <Button variant="icon-secondary" disabled={!canPreviousPage} >
        <Icon icon="pagerPrevious" />
      </Button>
      <Button variant="icon-secondary" disabled={!canNextPage}>
        <Icon icon="pagerNext" />
      </Button>
    </div>
  );
};

export default Pagination;
