using System;

namespace todo_blazor_wasm.Models
{
    public class TodoItemModel
    {
        public Guid Id { get; } = Guid.NewGuid();
        public string Title { get; set; }
    }
}
