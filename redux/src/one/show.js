import React from 'react'


export default ({children,result}) => (
    <div>
       <h4>计算结果：{result}</h4>
        {children}
    </div>
)

