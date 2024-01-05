import { DoThings, models } from '@teamkeel/sdk';

export default DoThings(async (ctx, inputs) => {

    for (let i = 0; i < inputs.count; i++){
        await models.package.create({
            name: inputs.name
        });
    }

    const packages = await models.package.where({name: inputs.name}).findMany();

    return packages.length;
})