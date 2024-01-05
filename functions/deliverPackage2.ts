import { DeliverPackage2, DeliverPackage2Hooks, models, permissions } from '@teamkeel/sdk';

// To learn more about what you can do with hooks,
// visit https://docs.keel.so/functions
const hooks : DeliverPackage2Hooks = {
    async beforeWrite(ctx, inputs, values) {
        const p = await models.package.findOne({id:  inputs.where.id});
        if (!p) {
            permissions.deny();
        }

        return {
            ...values,
            isDelivered: true
        }
    }
};

export default DeliverPackage2(hooks);
	