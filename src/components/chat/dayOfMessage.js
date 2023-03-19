function dayOfMessage(messages, firstMessageDay) {
    const days = [];
    messages?.docs.reverse().map((msg) => {
      days.push(
        msg._document.data.value.mapValue.fields.createdAt.timestampValue
      );
      return null;
    });
    let lastDay = new Date(days[0]);
    for (let i = 0; i < days.length; i++) {
      const dayIter = new Date(days[i]);
      if (lastDay.getDate() !== dayIter.getDate()) {
        firstMessageDay.push(i);
        lastDay = dayIter;
      }
    }
  }

export default dayOfMessage