const bcrypt = require('bcryptjs');

const Mutations = {
  async createItem(parent, args, context, info) {
    const item = await context.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  },
  updateItem(parent, args, context, info) {
    const updates = { ...args };
    delete updates.id;
    return context.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteItem(parent, args, context, info) {
    const where = { id: args.id };
    const item = await context.db.query.item({ where }, `{id,title}`);

    return context.db.mutation.deleteItem({ where }, info);
  },
  async signup(parent, args, context, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.db.mutation.createUser(
      {
        ...args,
        password,
        permissions: { set: ['USER'] }
      },
      info
    );
  }
};

module.exports = Mutations;
