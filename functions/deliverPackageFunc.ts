import { DeliverPackageFunc, DeliverPackageFuncHooks } from '@teamkeel/sdk';

// To learn more about what you can do with hooks,
// visit https://docs.keel.so/functions
const hooks : DeliverPackageFuncHooks = {
    async beforeWrite(ctx, inputs, values) {
        return {
            ...values,
            isDelivered: true
        }
    }
};

export default DeliverPackageFunc(hooks);
	