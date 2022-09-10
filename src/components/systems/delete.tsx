import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import systemStore from '../../api/system';
import swal from 'sweetalert';

const DeleteSystem = () => {

    const navigate = useNavigate();

    useEffect(() => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this system file!",
            icon: "warning",
            dangerMode: true,
        })
            .then(async function name(willDelete: any) {
                if (willDelete) {
                    try {
                        let result = await systemStore.deleteSystem(String(systemStore.system._id));
                        console.log(result);
                        swal("Poof! Your system has been deleted!", {
                            icon: "success",
                        });
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    swal("Your system is safe!");
                }
            });
        navigate('/systems');
    }, []);

    return (
        <>...loading</>
    );

}
export default observer(DeleteSystem);
