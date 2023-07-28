/* eslint-disable react/prop-types */

import { Table, Divider } from 'antd';
const columns = [
  {
    title: 'Category Name',
    dataIndex: 'name',
  },
  {
    title: 'Diseases Covered',
    dataIndex: 'disease',
  },
];
const DiseaseTable = (props) => {
    const { data, titleSec, description } = props;

   return <div className='w-[95%] sm:w-[70%] mt-20 mx-auto'>
        <h1 className="text-3xl sm:text-5xl font-title font-bold text-third-dark  leading-[60px] sm:leading-[70px] tracking-[0.2px] mt-10 text-start ">{titleSec}</h1> 
       <p className="w-[100%] sm:w-[95%] mt-2 2xl:text-2xl 2xl:w-[60%] leading-[25px] tracking-[0.2px] text-p-text mb-5">{ description}</p>
        <Table columns={columns} dataSource={data} size="middle" pagination = {false} />
    </div>
};
export default DiseaseTable;