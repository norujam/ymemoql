export default {
  Query: {
    memos: async (parent, args, {
      models
    }) => {
      const memos = await models.Memo.find({});
      console.log(memos);
      return memos;
    }
  },
  Mutation: {
    addMemo: async (parent, {
      title,
      description
    }, {
      models
    }) => {
      const maxId = await models.Memo.find()
        .sort({
          id: -1
        })
        .limit(1);

      let id = 1;
      if (maxId[0]) id = maxId[0].id + 1;

      const newMemo = new models.Memo({
        id,
        title,
        description
      });
      // update the memo
      try {
        await newMemo.save();
      } catch (e) {
        throw new Error("Error" + e);
      }
      return newMemo;
    },

    updateMemo: async (parent, {
      id,
      title,
      description
    }, {
      models
    }) => {
      console.log(title);
      try {
        await models.Memo.updateOne({
          id: id
        }, {
          title: title,
          description: description
        });
        console.log('update');
      } catch (e) {
        throw new Error("Error" + e);
      }
      return true;
    },

    deleteMemo: async (parent, {
      id
    }, {
      models
    }) => {
      try {
        await models.Memo.deleteOne({
          id: id
        });
      } catch (e) {
        throw new Error("Error" + e);
      }
      return true;
    }
  }
};