import React from 'react'
import { address } from './address'
import axios from 'axios'

//批量添加数据
function addBatchData(queryInfo, returnFun) {
    quertInfo = Object.assign(
        {},
        {
            token: null,
            real,
            forecast: null,
            voltage: null,
            motor: null,
            wt_id: null,
        },
        queryInfo
    );
    Add(
        queryInfo.token,
        {
            quey:
                `
                mutation{
                    insert_wt_powerperformance(
                        objects:[{
                            real:`+ queryInfo.real + `,
                            wt_id:`+ queryInfo.wt_id + `,
                            forecast:`+ queryInfo.forcecast + `,
                        }]
                    ){
                        returning{
                            id,
                        }
                    }
                }
            `,
            variables: null,
        },
        (e) => {
            if (e.errors) {
                if (e.errors[0].extensions.code === "invalid-jwt") {
                    return ("token失效")
                }
            } else {
                returnFun(e);
            }
        }
    );
}
