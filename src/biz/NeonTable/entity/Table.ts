/*
 * @Author: maggot-code
 * @Date: 2022-04-20 22:44:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 23:15:05
 * @Description: file content
 */
import { Sign } from "@neon-biz/share/entity/Sign";
import { Load } from "@neon-biz/share/entity/Load";

export function Table() {
    const { value: sign, setupSign } = Sign();
    const { value: loading, setupLoading } = Load();

    const column = ref<Array<any>>([]);
    const data = ref<Array<any>>([]);
    const setupCollumn = (columns: Array<any>) => {
        column.value = columns;
    }
    const setupData = (datasource: Array<any>) => {
        data.value = datasource;
    }

    const tableSource = computed(() => ({
        sign,
        loading,
        tableColumn: column,
        tableData: data
    }));

    return {
        tableSource,
        setupSign,
        setupLoading,
        setupCollumn,
        setupData
    }
}