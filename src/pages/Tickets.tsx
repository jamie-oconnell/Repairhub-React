import React from "react";
import PageHeader from "../components/layout/PageHeader";

interface Props {
    
}

const Tickets = (props: Props) => {
    return (
<>
        <PageHeader>
          <span className="textstyle-header flex-1">Tickets</span>
        </PageHeader>
        <div className="w-full px-8 py-8 flex justify-center fill-screen-height">
        </div>
      </>
    )
}

export default Tickets
