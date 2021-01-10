import React from "react";
import Button from "./Button";
import Icon from "./Icon";

interface Props {
  firstValue: number;
  lastValue: number;
  total: number | undefined;
  canNextPage: boolean | undefined;
  canPreviousPage: boolean | undefined;
  onPageForward: React.MouseEventHandler<HTMLButtonElement>;
  onPageBack: React.MouseEventHandler<HTMLButtonElement>;
}

const Pagination = ({
  firstValue,
  lastValue,
  total,
  canNextPage,
  canPreviousPage,
  onPageForward,
  onPageBack
}: Props) => {
  return (
    <div>
      <span className="textstyle-body text-gray-60 mr-2">{`${firstValue}-${lastValue} of ${total}`}</span>
      <Button variant="icon-secondary" disabled={!canPreviousPage} onClick={onPageBack}>
        <Icon icon="pagerPrevious" />
      </Button>
      <Button
        variant="icon-secondary"
        disabled={!canNextPage}
        onClick={onPageForward}
      >
        <Icon icon="pagerNext" />
      </Button>
    </div>
  );
};

export default Pagination;
