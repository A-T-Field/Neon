/*
 * @Author: maggot-code
 * @Date: 2022-04-20 22:49:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 23:57:05
 * @Description: file content
 */
import { Table } from "@neon-biz/NeonTable/entity/Table";

export function useNeonTable(name: string) {
    const { tableSource, setupCollumn, setupData, setupSign, setupLoading } = Table();

    const setupTableData = (asyncData: any) => {
        setupLoading(true);

        asyncData
            .then(setupData)
            .catch((error: any) => {
                console.log(error);
                setupData([]);
            })
            .finally(() => {
                setupLoading(false);
                setupSign();
            })
    };

    provide(name, tableSource);

    return {
        setupSign,
        setupLoading,
        setupTableData,
        setupTableColumn: setupCollumn,
    }
}