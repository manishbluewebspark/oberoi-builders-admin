import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PropertyTable from "@/components/Property/PropertyTable"


const Page = () => {
    return (
        <div>
              <DefaultLayout>
                <PropertyTable></PropertyTable>
            </DefaultLayout>
        </div>
    );
}

export default Page;
